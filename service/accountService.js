import Account from "../model/account.js";

export const createAccountService = async (accData) => {
  try {
    const [acc, created] = await Account.findOrCreate({
      where: { accountId: accData.accountId },
      defaults: accData,
    });
    if (!created) {
      return { error: "Account already Exists" };
    }
    return acc;
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const getAccountService = async () => {
  try {
    const acc = await Account.findAll();
    if (acc.length === 0) {
      return { error: "No Accounts Found" };
    }
    return acc;
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const getAccountByIdService = async (accId) => {
  try {
    const acc = await Account.findByPk(accId);
    if (!acc) {
      return { error: "Account Not Found" };
    }
    return acc;
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const updateAccountService = async (accId, accData) => {
  try {
    const acc = await Account.findByPk(accId);
    if (!acc) {
      return { error: "Account Not Found" };
    }
    await acc.update(accData);
    return acc;
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const deleteAccountService = async (accountId) => {
  try {
    const acc = await Account.findByPk(accountId);
    if (!acc) {
      return "Account Not Found";
    }
    await acc.destroy();
    return acc;
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const transferAccountService = async (accId, accId2, data) => {
  try {
    const acc = await Account.findByPk(accId);
    const acc2 = await Account.findByPk(accId2);

    if (!acc || !acc2) {
      return { error: "Account not created" };
    }

    const amount = data.amount;

    acc.balance = (acc.balance || 0) - amount;
    acc2.balance = (acc2.balance || 0) + amount;

    await acc.save();
    await acc2.save();

    return { acc, acc2 };
  } catch (error) {
    console.error("Transfer Error:", error);
    return { error: "An unexpected error occurred" };
  }
};

