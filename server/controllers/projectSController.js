import fs from 'fs';
import { errorResponse, successResponse } from '../helpers/responses.js';
import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  try {
    const { name, smallDescription, description, startDate, endDate, isMain } =
      req.body;
    const userId = req.tokenData._id;
    let images = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach((image) => {
        images.push(image.filename);
      });
    }
    const newProject = new Project({
      name: name,
      smallDescription: smallDescription,
      description: description,
      startDate: startDate,
      endDate: endDate,
      gallery: images,
      isMain: isMain,
      createdBy: userId,
      updatedBy: userId,
    });
    const project = await newProject.save();
    return successResponse(res, 201, 'Project created successfully', project);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    return successResponse(
      res,
      200,
      'Projects retrieved successfully',
      projects
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getActiveProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      isActive: true,
    });
    return successResponse(
      res,
      200,
      'Projects retrieved successfully',
      projects
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getActiveMainProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      isMain: true,
      isActive: true,
    })
      .sort({ updatedAt: 'desc' })
      .limit(2);
    return successResponse(
      res,
      200,
      'Projects retrieved successfully',
      projects
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getSpecificProject = async (req, res) => {
  try {
    const { itemId } = req.params;
    const projectFound = await Project.findOne({ _id: itemId });
    if (!projectFound) {
      return errorResponse(res, 404, 'Project not found');
    }
    return successResponse(
      res,
      200,
      'Project retrieved successfully',
      projectFound
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const updateProject = async (req, res) => {
  try {
    const { itemId } = req.params;
    const projectFound = await Project.findOne({ _id: itemId });
    if (!projectFound) {
      return errorResponse(res, 404, 'Project not found');
    }
    const { name, smallDescription, description, startDate, endDate, isMain } =
      req.body;
    const userId = req.tokenData._id;
    let images = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach((image) => {
        images.push(image.filename);
      });
      projectFound.gallery.forEach((image) => {
        fs.unlinkSync(`public/images/${image}`);
      });
    }
    const project = await Project.findOneAndUpdate(
      { _id: itemId },
      {
        $set: {
          name: name,
          smallDescription: smallDescription,
          description: description,
          startDate: startDate,
          endDate: endDate,
          gallery: images,
          isMain: isMain,
          updatedBy: userId,
        },
      },
      { new: true }
    );
    return successResponse(res, 200, 'Project edieted successfully', project);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { itemId } = req.params;
    const projectFound = await Project.findOne({ _id: itemId });
    if (!projectFound) {
      return errorResponse(res, 404, 'Project not found');
    }
    await Project.deleteOne({ _id: itemId });
    projectFound.gallery.forEach((image) => {
      fs.unlinkSync(`public/images/${image}`);
    });
    return successResponse(res, 204);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const activateProject = async (req, res) => {
  try {
    const { itemId } = req.params;
    const projectFound = await Project.findOne({ _id: itemId });
    if (!projectFound) {
      return errorResponse(res, 404, 'Project not found');
    }
    const userId = req.tokenData._id;
    const project = await Project.findOneAndUpdate(
      { _id: itemId },
      {
        $set: {
          isActive: true,
          updatedBy: userId,
        },
      },
      { new: true }
    );
    return successResponse(res, 200, 'Project edited successfully', project);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const archiveProject = async (req, res) => {
  try {
    const { itemId } = req.params;
    const projectFound = await Project.findOne({ _id: itemId });
    if (!projectFound) {
      return errorResponse(res, 404, 'project not found');
    }
    const userId = req.tokenData._id;
    const project = await Project.findOneAndUpdate(
      { _id: itemId },
      {
        $set: {
          isActive: false,
          updatedBy: userId,
        },
      },
      { new: true }
    );
    return successResponse(res, 200, 'Project edited successfully', project);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};
