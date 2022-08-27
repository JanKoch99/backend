export function isNewerDate(dateOld: Date, dateNew: Date){
    var tempDateOld = new Date(dateOld)
    var tempDateNew = new Date(dateNew)
    if (tempDateOld.getFullYear() < tempDateNew.getFullYear()) {
        return false
    }
    if (tempDateOld.getMonth() < tempDateNew.getMonth()) {
        return false
    }
    if (tempDateOld.getDay() < tempDateNew.getDay()) {
        return false
    }
    return true
}

