function imageResFromType(ptItemType) {
    switch (ptItemType) {
        case 'PBI':
            return '/images/icon_pbi.png';
        case 'Bug':
            return '/images/icon_bug.png';
        case 'Chore':
            return '/images/icon_chore.png';
        case 'Impediment':
            return '/images/icon_impediment.png';
        default:
            return '';
    }
}

function getIndicatorClass(priority) {
    switch (priority) {
        case 'Critical':
            return 'priority-critical';
        case 'High':
            return 'priority-high';
        case 'Medium':
            return 'priority-medium';
        case 'Low':
            return 'priority-low';
        default:
            return '';
    }
}

function onChange(arg) {
    var rows = arg.sender.select();
    var itemId = $($(rows[0]).find('.pt-indicator')[0]).attr('data-id');
    window.location.href = `/${itemId}/Details`;
}