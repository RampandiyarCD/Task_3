import {createStatementService, getStatementsService, getStatementByIdService, updateStatementService, deleteStatementService } from "../service/statementService.js";

export const createStatement = async (req, res) => {
    try {
        const result = await createStatementService(req.body);
        if (result?.error) {
            return res.status(404).json({ error: result.error });
        }
        return res.status(201).json({ statement: result });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getStatements = async (req, res) => {
    try {
        const result = await getStatementsService(accountId);
        if (result?.error) {
            return res.status(404).json({ error: result.error });
        }
        return res.status(200).json({ statements: result });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getStatementById = async (req, res) => {
    try {
        const result = await getStatementByIdService(req.params.id);
        if (result?.error) {
            return res.status(404).json({ error: result.error });
        }
        return res.status(200).json({ statement: result });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateStatement = async (req, res) => {
    try {
        const result = await updateStatementService(req.params.id, req.body);
        if (result?.error) {
            return res.status(404).json({ error: result.error });
        }
        return res.status(200).json({ statement: result });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteStatement = async (req, res) => {
    try {
        const result = await deleteStatementService(req.params.id);
        if (result?.error) {
            return res.status(404).json({ error: result.error });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}