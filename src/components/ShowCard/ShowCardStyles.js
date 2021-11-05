const ShowCardStyles = (props) => {
    return {
        wrapper: {
            display: "flex",
            padding: "1rem",
            width: 500,
            border: "1px solid #BBB",
            borderRadius: 10,
            margin: 5,
            cursor: "pointer",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#FFF"
        },
        textContainer: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "inherit",
            textAlign: "center",
            alignContent: "center",
            padding: 10,
            overflow: !props.detail ? "hidden" : "unset",
            whiteSpace: !props.detail ? "nowrap" : "unset"
        },
        image: {
            height: 200,
            border: "1px solid #333",
            borderRadius: 10
        },
        imagePlaceholder: { 
            height: 200, 
            width: 210, 
            background: "#CCC",
            border: "1px solid #333",
            borderRadius: 10 
        },
        title: {
            font: "normal 700 24px/22px Ubuntu",
            marginBottom: 16
        },
        summary: {
            font: "normal 400 18px/20px Ubuntu",
            marginBottom: 16
        },
        rating: {
            font: "normal 400 12px/20px Ubuntu",
            marginBottom: 16
        }
    };
};

export default ShowCardStyles;