exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        message,
        query: `${Object.entries(req.query)}`
    });
}
exports.error = (req, res, error, status) => {
    res.status(status || 500).send({
        error,
        query: `${Object.entries(req.query)}`
    });
}
