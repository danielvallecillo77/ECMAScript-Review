var team = ['Daniel', 'Angel', 'Jose']

// VAINILLA

if(team.indexOf('Angel') != -1){
    console.log('He is part of the team!')
} else {
    console.log('He is not part of the team')
}

// ES7
if (team.includes('Angel')){
    console.log('He is part of the team!')
} else {
    console.log('He is not part of the team')
}