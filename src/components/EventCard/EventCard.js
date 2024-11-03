import React from 'react';
import { Calendar, MapPin, Music, Ticket, Star, Users } from 'lucide-react';
import styles from '../../styles/EventCard.module.css';

const EventCard = ({ event }) => {
  const { 
    title, 
    genre, 
    date, 
    location, 
    price, 
    capacity, 
    description, 
    featured 
  } = event;

  return (
    <div className={styles.card}>
      {featured && (
        <div className={styles.featured}>
          <Star size={16} />
          <span>Featured</span>
        </div>
      )}

      <div className={styles.genre}>
        <Music size={20} />
        <span>{genre}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.info}>
        <Calendar size={16} />
        <span>{date}</span>
      </div>
      <div className={styles.info}>
        <MapPin size={16} />
        <span>{location}</span>
      </div>
      <div className={styles.info}>
        <Users size={16} />
        <span>Capacity: {capacity}</span>
      </div>

      <div className={styles.footer}>
        <div className={styles.price}>
          <Ticket size={20} />
          <span>{price}</span>
        </div>
        <button className={styles.button}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;