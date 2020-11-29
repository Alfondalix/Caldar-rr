module.expots = mongoose => {
    const Boilers = mongoose.model(
        "boilers",
        mongoose.Schema({
            id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
                
            },
            description: {
                type: String,
                required: true
            },
            idType:{
                type: mongoose.Schema.ObjectId,
                 required: true
            },
        }),
    )};