import React from "react";
import { useNavigate } from "react-router-dom";
import CardStyles from "./ShowCardStyles";

const ShowCard = (props) => {
    const {
        show: { image, name, summary, id, rating }
    } = props;
    const navigate = useNavigate();
    const styles = CardStyles(props);
    return (
        <div data-testid={`${id}`} id={`${id}`} style={styles.wrapper} onClick={() => navigate(`/${id}`)}>
            {image ? (
                <img src={image?.medium} alt={`${name}`} style={styles.image} />
            ) : (
                <div style={styles.imagePlaceholder}></div>
            )}
            <div style={styles.textContainer}>
                <p style={styles.title}>{name}</p>
                {
                    props.detail && rating.average && (
                        <span style={styles.rating}>Rating: {rating.average}</span>
                    )
                }
                <p style={styles.summary} dangerouslySetInnerHTML={{ __html: summary }}></p>
            </div>
        </div>
    );
};

export default ShowCard;
