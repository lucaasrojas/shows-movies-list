const ShowCardStyles = (props) => {
    return {
        wrapper: {
            display: "flex",
            padding: "1rem",
            width: 500,
            border: "1px solid #BBB",
            borderRadius: 10,
            margin: 5,
            cursor: "pointer"
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
        imagePlaceholder: { height: 200, width: 210, background: "#CCC" }
    };
};

export default ShowCardStyles;