import Statement from '../model/statement.js';

export const createStatementService = async (statementData) => {
    try {
        const statement = await Statement.create(statementData);
        return statement;
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
}

export const getStatementsService = async (accountId) => {
    try {
        const statements = await Statement.findAll({
            where: { accountId }
        });
        if (statements.length === 0) {
            return { error: "No statements found for this account" };
        }
        return statements;
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
}

export const getStatementByIdService = async (id) => {
    try {
        const statement = await Statement.findByPk(id);
        if (!statement) {
            return { error: "Statement not found" };
        }
        return statement;
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
}

export const updateStatementService = async (id, statementData) => {
    try {
        const statement = await Statement.findByPk(id);
        if (!statement) {
            return { error: "Statement not found" };
        }
        await statement.update(statementData);
        return statement;
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
}

export const deleteStatementService = async (id) => {
    try {
        const statement = await Statement.findByPk(id);
        if (!statement) {
            return { error: "Statement not found" };
        }
        await statement.destroy();
        return { message: "Statement deleted successfully" };
    } catch (error) {
        return { error: "An unexpected error occurred" };
    }
}