const mongoose = require('mongoose');

const revisionSchema = new mongoose.Schema({
    version: Number,
    title: String,
    category: String,
    content: String,
    date: String,
    editedBy: String,
    feedback: String
}, { _id: false });

const virtualReviewsSchema = new mongoose.Schema({
    evrim: String,
    cemal: String
}, { _id: false });

const teacherReplySchema = new mongoose.Schema({
    evrimReply: String,
    cemalReply: String
}, { _id: false });

const essaySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    studentClass: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
    virtualReviews: virtualReviewsSchema,
    revisions: [revisionSchema],
    teacherReply: teacherReplySchema
}, { timestamps: true });

module.exports = mongoose.model('Essay', essaySchema);
