import { Request, Response } from "express";
import { Tag } from '../models/tag';
import {
    createTag,
    } from '../services/tagService';
import {addTagToProject} from "../services/projectService";
import {getSingleProjectHandler} from "./projectController";



export const createTagHandler = async (req: Request, res: Response) => {
    try {
        const tag: Tag = req.body;
        const projectId: string = ;

        tag.id = id;

        const newTagId = await createTag(tag);
        await addTagToProject(projectId, newTagId);

        return res.status(205).json({
            message: "Tag created successfully",
            tagId: newTagId
        });

    } catch (error) {
        console.error("Error creating tag:", error);
        return res.status(500).json({ error: "Failed to create tag" });
    }
};



export const getTagFromProjectHandler = async (req: Request, res: Response) => {
    try {
        const projectId: string = getSingleProjectHandler(req);
        const tagId = req.params.id;
        const project = await findUniqueProject(projectId);

        if (!tag) {
            return res.status(404).json({
                error: "TAG not found"
            });
        }

        if (project.tagId.includes(tagId)) {
            return res.status(200).json({
                tag
            });
        }

    } catch (error) {
        console.error("Error getting tag:", error);
        return res.status(500).json({
            error: "Failed to get tag"
        });
    }
};