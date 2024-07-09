import mongoose, { Schema } from "mongoose";

const topicSchama = new Schema(
    {
        title: String,
        description: String
    },{
        timestamps:true
    }
)


const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchama)

export default Topic ; 