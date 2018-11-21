import { teamsRef, usersRef } from '../../services/Database';
import { uploadFile } from '../../services/Storage';

export const GET_TEAM_SUCCESS = "GET_TEAM_SUCCESS";

/**
 * Use to create a new team
 * @param {String} teamName Nombre del equipo
 * @param {File} imageFile File (imagen) para el logo del equipo
 */
export const createTeam = (teamName, imageFile, onBegin, setProgress, afterUpload, CaptainData) => (dispatch) => {
    if (imageFile == null) {
        teamsRef.child(teamName.trim().toLowerCase()).set({name: teamName, logo: '', players: {[CaptainData.uid]: CaptainData}});
        usersRef.child(CaptainData.uid).update({team: teamName});
        afterUpload();
        return dispatch(getTeamSuccess({
            name: teamName,
            logo: '',
            players: {[CaptainData.uid]: CaptainData}
        }));
    } else {
        teamsRef.child(teamName.trim().toLowerCase()).set({name: teamName, players: {[CaptainData.uid]: CaptainData}});
        uploadFile('TeamsLogos/'+teamName, imageFile, onBegin, setProgress, (downloadURL) => {
            teamsRef.child(teamName.trim().toLowerCase()).update({logo: downloadURL});
            usersRef.child(CaptainData.uid).update({team: teamName});
            afterUpload();
            return dispatch(getTeamSuccess({
                name: teamName,
                logo: downloadURL,
                players: {[CaptainData.uid]: CaptainData}
            }));
        });
    }
}

export const getTeam = (teamName) => (dispatch) => {
    if (teamName !== '') {
        teamsRef.child(teamName.trim().toLowerCase()).on('value', (team) => {
            return dispatch(getTeamSuccess(team.val()));
        });
    }
}

function getTeamSuccess(team) {
    return {
        type: GET_TEAM_SUCCESS,
        team
    }
}