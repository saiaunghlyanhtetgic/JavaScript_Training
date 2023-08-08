function getDiscount(totalAmount) {
    return totalAmount >= 1000
      ? totalAmount * 0.2
      : totalAmount >= 500
        ? totalAmount * 0.1
        : 0;
  }
  
  console.log(getDiscount(1200));
  console.log(getDiscount(600));
  console.log(getDiscount(300));
  