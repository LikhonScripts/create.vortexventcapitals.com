function burn(address account, uint256 amount) external onlyOwner {
    require(canBurn, "the burn function isn't activated");
    _burn(account, amount);
}
