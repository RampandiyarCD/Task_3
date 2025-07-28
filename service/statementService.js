import Statement from "../model/statement.js";

export const createStatementService = async (statementData) => {
  const statement = await Statement.create(statementData);
  return statement;
};

export const getStatementsService = async (accountId) => {
  const statements = await Statement.findAll({
    where: { accountId },
  });

  if (statements.length === 0) {
    return { error: "No statements found for this account" };
  }
  return statements;
};

export const getStatementByIdService = async (id) => {
  const statement = await Statement.findByPk(id);
  if (!statement) {
    return { error: "Statement not found" };
  }
  return statement;
};

export const updateStatementService = async (id, statementData) => {
  const statement = await Statement.findByPk(id);
  if (!statement) {
    return { error: "Statement not found" };
  }
  await statement.update(statementData);
  return statement;
};

export const deleteStatementService = async (id) => {
  const statement = await Statement.findByPk(id);
  if (!statement) {
    return { error: "Statement not found" };
  }
  await statement.destroy();
  return { message: "Statement deleted successfully" };
};
