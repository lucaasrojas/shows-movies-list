import React from "react";
import { ShowCard } from "../index";
import Api from "../../api";

const ShowsList = (props) => {
    const [showsList, setShowsList] = React.useState(props.showsList || []);

    React.useEffect(() => {
        if (!showsList.length) {
            Api.getAll().then((res) => {
                setShowsList(res);
            });
        }
    }, []);

    return showsList.length ? (
        <div>
            {showsList.map((el, i) => (
                <ShowCard data-testid={`${el.show.id}`} key={el.show.id} {...el} />
            ))}
        </div>
    ) : null;
};

export default ShowsList;
