import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
    title: { en: String, fr: String, rw: String },
    description: { en: String, fr: String, rw: String },
    isActive: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);
const ProjectsIntro = mongoose.model('ProjectsIntro', schema);
export default ProjectsIntro;
