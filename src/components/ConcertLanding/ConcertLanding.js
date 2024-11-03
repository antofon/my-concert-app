import React, { useState } from 'react';
import { Search } from 'lucide-react';
import EventCard from '../EventCard/EventCard';
import styles from '../../styles/ConcertLanding.module.css';

const ConcertLanding = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const events = [
    // Mixed Events
    {
      id: 1,
      title: "Neon Nights Festival",
      genre: "mixed",
      date: "July 15, 2024",
      location: "Stellar Arena",
      price: "$85",
      capacity: "5000",
      featured: true,
      description: "An immersive audio-visual experience featuring top electronic artists"
    },
    {
      id: 2,
      title: "Fusion Fest",
      genre: "mixed",
      date: "August 28, 2024",
      location: "Riverside Park",
      price: "$95",
      capacity: "6000",
      featured: false,
      description: "Where rock meets electronic in an explosive outdoor celebration"
    },
    {
      id: 3,
      title: "Global Rhythms",
      genre: "mixed",
      date: "September 10, 2024",
      location: "Cultural Center",
      price: "$75",
      capacity: "4000",
      featured: false,
      description: "World music festival featuring artists from five continents"
    },
  
    // Classical Events
    {
      id: 4,
      title: "Twilight Symphony",
      genre: "classical",
      date: "August 2, 2024",
      location: "Crystal Hall",
      price: "$120",
      capacity: "2000",
      featured: false,
      description: "A mesmerizing evening of orchestral masterpieces under the stars"
    },
    {
      id: 5,
      title: "Chamber Music Society",
      genre: "classical",
      date: "July 25, 2024",
      location: "Grand Theater",
      price: "$85",
      capacity: "1500",
      featured: true,
      description: "Intimate evening featuring Beethoven's most beloved quartets"
    },
    {
      id: 6,
      title: "Opera Under Stars",
      genre: "classical",
      date: "September 5, 2024",
      location: "Garden Amphitheater",
      price: "$150",
      capacity: "2500",
      featured: false,
      description: "Open-air performance of Mozart's The Magic Flute"
    },
  
    // Jazz Events
    {
      id: 7,
      title: "Azure Jazz Club",
      genre: "jazz",
      date: "June 28, 2024",
      location: "Blue Room",
      price: "$65",
      capacity: "1000",
      featured: false,
      description: "Intimate jazz performances in our legendary underground venue"
    },
    {
      id: 8,
      title: "Sunset Jazz Festival",
      genre: "jazz",
      date: "July 30, 2024",
      location: "Harbor Point",
      price: "$90",
      capacity: "3000",
      featured: true,
      description: "Waterfront jazz festival featuring contemporary jazz masters"
    },
    {
      id: 9,
      title: "Late Night Jazz",
      genre: "jazz",
      date: "August 15, 2024",
      location: "The Velvet Lounge",
      price: "$55",
      capacity: "800",
      featured: false,
      description: "After-hours jazz sessions with local and international artists"
    }
  ];

  // Combined filtering for both genre and search term
  const filteredEvents = events
    .filter(event => filter === 'all' || event.genre === filter)
    .filter(event => {
      if (!searchTerm) return true;
      
      const searchLower = searchTerm.toLowerCase();
      return (
        event.title.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.location.toLowerCase().includes(searchLower) ||
        event.genre.toLowerCase().includes(searchLower)
      );
    });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(!!e.target.value);
  };

  const handleSearchClick = () => {
    // Optional: Focus the input when clicking the magnifier
    document.getElementById('search-input').focus();
  };

  return (
    <div className={styles.container}>
      {/* Compact Hero */}
      <div className={styles.heroCompact}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Experience Live Music</h1>
          
          <div className={styles.searchAndFilters}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Search by title, location, or genre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
            </div>

            <div className={styles.filterContainer}>
              {['all', 'classical', 'jazz', 'mixed'].map((type) => (
                <button 
                  key={type}
                  onClick={() => setFilter(type)}
                  className={filter === type ? styles.filterButtonActive : styles.filterButtonInactive}
                >
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid - Now visible when searching */}
      <div className={styles.eventsContainer}>
        <div className={styles.eventsGrid}>
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConcertLanding;