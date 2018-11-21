import { teamsRef } from '../../services/Database';
import { uploadFile } from '../../services/Storage';

export const GET_TEAM_SUCCESS = "GET_TEAM_SUCCESS";

/**
 * Use to create a new team
 * @param {String} teamName Nombre del equipo
 * @param {File} imageFile File (imagen) para el logo del equipo
 */
export const createTeam = (teamName, imageFile, onBegin, setProgress, CaptainData) => (dispatch) => {
    if (imageFile == null) {
        teamsRef.child(teamName.trim().toLowerCase()).set({name: teamName, logo: '', players: {[CaptainData.uid]: CaptainData}});
        return dispatch(getTeamSuccess({
            name: teamName,
            logo: '',
            players: {[CaptainData.uid]: CaptainData}
        }));
    } else {
        uploadFile('TeamsLogos/'+teamName, imageFile, onBegin, setProgress, (downloadURL) => {
            teamsRef.child(teamName.trim().toLowerCase()).set({name: teamName, logo: downloadURL,  players: {[CaptainData.uid]: CaptainData}});
            return dispatch(getTeamSuccess({
                name: teamName,
                logo: downloadURL,
                players: {[CaptainData.uid]: CaptainData}
            }));
        });
    }
}

function getTeamSuccess(team) {
    return {
        type: GET_TEAM_SUCCESS,
        team
    }
}