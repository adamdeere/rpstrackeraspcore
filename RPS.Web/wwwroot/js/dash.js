function OnAssigneeChange(e) {
    var userId = e.sender.value();
    if (userId) {
        location.href = `/userId=${userId}`;
    } else {
        location.href = ``;
    }
}