import express  from 'express'
const app = express();

app.get("/", (req, res) => {
    res.send("Hello desde backend")
})

app.get('scan-qr/:token', async (req, res) => {
    const { token } = req.params;
    console.log(token)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}` )
})

