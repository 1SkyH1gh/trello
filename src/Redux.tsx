import {createAsyncAction, createReducer, isActionOf} from "typesafe-actions";
import {Epic} from "redux-observable";
import {of} from 'rxjs';
import {catchError, filter, map, mergeMap} from "rxjs/operators";


export const token='7b168576eec6b5e842cc08eb076ec8931ccd1e8a7aeda72b94ae09692b28ed479f2fbde9aa0c5c9a69bae';
export const method='https://api.vk.com/method/users.get?user_id=210700286&v=5.52'
export const actions={
   setTaskValue:createAsyncAction(
        "REQUEST_TASK",
        "SUCCESS_TASK",
        "FAILURE_TASK",
    )<undefined,[{id:number,value:string}],null>()
}

export const taskValueReducer=createReducer(0)
    .handleAction(actions.setTaskValue,(state ,actions)=>state+actions.payload)

export const taskValueEpic:Epic=(action$)=>action$.pipe(
    filter(isActionOf(actions.setTaskValue.request)),
    mergeMap(()=>method({})),
    map(data=>data.response.success?
    actions.setTaskValue.success(data.response.rows):
        actions.setTaskValue.failure(null)
    ),
    catchError(()=>of(actions.setTaskValue.failure(null)))

)