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

    return show ? <ShowCard detail show={show} /> : null;
};

export default ShowDetail;
