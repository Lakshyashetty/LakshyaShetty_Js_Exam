function closeAccount(accountId, isUpdate) {
  try {
    if (!isUpdate) {
      throw new Error("Account Not Updated");
    }else{

        console.log("Closing Updated:", accountId);
    }


  } catch (error) {
    console.log("Error:", error.message);

  } finally {
    console.log("Records updated for account:", accountId);
  }
}

closeAccount(101, false);    
