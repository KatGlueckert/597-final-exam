
//Get Visible Teammates
const getVisibleTeammates = (uid, teammates) => {
    return teammates.filter((teammate) => {
        const isTeammate = uid ? teammates.uid: true; 
       
        return isTeammate;
    }).sort((a, b) => {
            return a.teammateName < b.teammateName ? 1 : -1
    });
}

export default getVisibleTeammates;

