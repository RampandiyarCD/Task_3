import {
  createStatementService,
  getStatementsService,
  getStatementByIdService,
  updateStatementService,
  deleteStatementService,
} from "../service/statementService.js";

export const createStatement = async (req, res) => {
  try {
    const statement = await createStatementService(req.body);
    if (statement?.error) {
      return res.status(404).json({ error: statement.error });
    }
    return res.status(201).json(statement);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getStatements = async (req, res) => {
  try {
    const statement = await getStatementsService(accountId);
    if (statement?.error) {
      return res.status(404).json({ error: statement.error });
    }
    return res.status(200).json(statement);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getStatementById = async (req, res) => {
  try {
    const statement = await getStatementByIdService(req.params.id);
    if (statement?.error) {
      return res.status(404).json({ error: statement.error });
    }
    return res.status(200).json(statement);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateStatement = async (req, res) => {
  try {
    const statement = await updateStatementService(req.params.id, req.body);
    if (statement?.error) {
      return res.status(404).json({ error: statement.error });
    }
    return res.status(200).json(statement);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteStatement = async (req, res) => {
  try {
    const statement = await deleteStatementService(req.params.id);
    if (statement?.error) {
      return res.status(404).json({ error: statement.error });
    }
    return res.status(200).json(statement);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
