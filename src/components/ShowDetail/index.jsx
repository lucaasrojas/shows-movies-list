import React from "react";
import Api from "../../api";
import { ShowCard } from "../index";
import { useParams } from "react-router-dom";

const ShowDetail = () => {
    const [show, setShow] = React.useState();
    const queryParams = useParams();
    React.useEffect(() => {
        if (!show) {
            Api.getById({ id: queryParams.id }).then((res) => setShow(res));
        }
    }, [show, queryParams.id]);

    return show ? (
        <div style={{display: "flex", justifyContent: "center"}}>
            <ShowCard detail show={show} />
        </div>

    ) : null;
};

export default ShowDetail;
