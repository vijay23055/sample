import React, { useState } from 'react'
import './Searchbar.css'
const Searchbar = () => {

    const mockResults = {
        all: [
            { type: "people", name: "Caroline Dribsson", status: "Unactivated", dot: "red", image: "👤" },
            { type: "people", name: "Adam Cadribbean", status: "Active 1w ago", dot: "yellow", image: "👤" },
            { type: "file", name: "final_dribbble_presentation.jpg", location: "Presentations", time: "Edited 1w ago" },
            { type: "people", name: "Margareth Cendribbssen", status: "Active 1w ago", dot: "yellow", image: "👤" },
            { type: "file", name: "dribbble_animation.avi", location: "Videos", time: "Added 1y ago" },
            { type: "file", name: "Dribbble Folder", location: "Projects", time: "12 Files" },
            { type: "chat", name: "Dribbble Folder", location: "Projects", time: "12 Files",dot: "red", image: "👤" },
        ]
    };

    const [query, setQuery] = useState("")
    const [isExpand, setExpand] = useState(false)
    const [activeTab, setactiveTab] = useState("all")
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState({
        files: true,
        people: true,
        chat: false,
        list: false
    })

    const handleexpand = () => {
        setExpand(true)
    }


    const handleclick = () => {
        setQuery("")
    }

    const filterdata = mockResults.all.filter((item) => {
        if (item.type === "file" && !filter.files) return false;
        if (item.type === "people" && !filter.people) return false;
        if (item.type === "chat" && !filter.chat) return false;
        if (item.type === "list" && !filter.list) return false;


        if (activeTab !== "all" && activeTab !== item.type) return false;

        if (query && !item.name.toLowerCase().includes(query.toLowerCase())) return false;

        return true;
    })

    return <>
        <div className="searchbar-container">
            <div className="bar">
                <div className="searchbar-inner">
                    <span>🔍</span>
                    <input
                        type="text"
                        onClick={handleexpand}
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        // <button className="clear-btn" onClick={handleclick}>✖</button>
                        <button className="clear-btn" onClick={handleclick}>clear</button>
                    )}
                </div>
            </div>
            {isExpand && (
                <>
                    <div className="tab-area">

                        <div className="tab-button">
                            <button
                                className={`tab ${activeTab === "all" ? "active" : ""}`}
                                onClick={() => setactiveTab("all")}
                            >All</button>

                            <button
                                className={`tab ${activeTab === "file" ? "active" : ""}`}
                                onClick={() => setactiveTab("file")}
                            >Files</button>

                            <button
                                className={`tab ${activeTab === "people" ? "active" : ""}`}
                                onClick={() => setactiveTab("people")}
                            >People</button>

                            <button
                                className={`tab ${activeTab === "chat" ? "active" : ""}`}
                                onClick={() => setactiveTab("chat")}
                            >Chat</button>
                        </div>



                        <div className="dropdown-section">
                            <button className='btn-drp' onClick={() => setIsOpen(!isOpen)}>⚙️</button>
                            {isOpen && (
                                <div className="dropdown-inner">
                                    <div className="dropdown-menu">
                                        <span>📎 Files</span>
                                        <input type='checkbox' checked={filter.files} onChange={() => setFilter({ ...filter, files: !filter.files })} />
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>👤 People</span>
                                        <input type='checkbox' checked={filter.people} onChange={() => setFilter({ ...filter, people: !filter.people })} />
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>💬 Chats</span>
                                        <input type='checkbox' checked={filter.chat} onChange={() => setFilter({ ...filter, chat: !filter.chat })} />
                                    </div>
                                    <div className="dropdown-menu">
                                        <span>📋 Lists</span>
                                        <input type='checkbox' checked={filter.list} onChange={() => setFilter({ ...filter, list: !filter.list })} />
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                    <div className="search-result">
                        <div className="result-inner">
                            <div className="result-data">
                                {filterdata.length === 0 ? (
                                    <p className="no-results">No results</p>
                                ) : (
                                    filterdata.map((item, index) => (
                                        <div key={index} className="result-item">
                                            
                                            <div className="result-avatar">
                                                
                                                {item.dot && item.image && (
                                                    <>
                                                        <span className="avatar-emoji">{item.image}</span>
                                                        <span className="status-dot" style={{ backgroundColor: item.dot }}></span>
                                                    </>
                                                )}
                                            </div>
                                            <div className="result-content">
                                                <span className="name">{item.name}</span>
                                                {item.status && <span className="status">{item.status}</span>}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </>)}
            {/* Tabs */}


        </div>
    </>
}

export default Searchbar
