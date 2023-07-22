export {conutDown} from './count-down.test'



function const = ( start = 0) => {
    if ( start <= 0 ) {
        return[0]
    }
    else{
        let solutionArray = []
        for ( let i=start; i>= ;i--){
            solutionArray.push(i)

        };
        return solutionArray
    }
}