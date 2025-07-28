import Account from "../model/account.js";
import Statement from "../model/statement.js";

export const createAccountService = async (accData) => {
  const [acc, created] = await Account.findOrCreate({
    where: { accountId: accData.accountId },
    defaults: accData,
  });
  if (!created) {
    return { error: "Account already Exists" };
  }
  return acc;
};

export const getAccountService = async () => {
  const acc = await Account.findAll();
  if (acc.length === 0) {
    return { error: "No Accounts Found" };
  }
  return acc;
};

export const getAccountByIdService = async (accId) => {
  const acc = await Account.findByPk(accId);
  if (!acc) {
    return { error: "Account Not Found" };
  }
  return acc;
};

export const updateAccountService = async (accId, accData) => {
  const acc = await Account.findByPk(accId);
  if (!acc) {
    return { error: "Account Not Found" };
  }
  await acc.update(accData);
  return acc;
};

export const deleteAccountService = async (accountId) => {
  const acc = await Account.findByPk(accountId);
  if (!acc) {
    return "Account Not Found";
  }
  await acc.destroy();
  return acc;
};

export const transferAccountService = async (accId, accId2, data) => {
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

  const statement1 = await Statement.create({
    accountId: accId,
    date: new Date(),
    description: `Transfer to account ${accId2}`,
    amount: -amount,
    balance: acc.balance,
  });

  const statement2 = await Statement.create({
    accountId: accId2,
    date: new Date(),
    description: `Transfer from account ${accId}`,
    amount: amount,
    balance: acc2.balance,
  });

  return { acc, acc2 };
};
