import { Canister, query, update, Record, StableBTreeMap, Vec, Result, nat64, ic, Opt, text, Void, bool, nat16, Principal, Err } from 'azle';
import { v4 as uuidv4 } from 'uuid';

const ActionItem = Record({
    description: text,
    priority: nat64
})

const Description = text
const Priority = nat64
const ID = text

const ToDoList = StableBTreeMap(ID, ActionItem, 0)

export default Canister({
    AddItem: update([Description, Priority], ID, (_description:string, _priority:nat64) => {
        const id:string = uuidv4()
        const newAction: typeof ActionItem = {
            description: _description,
            priority: _priority
        }
        ToDoList.insert(id, newAction)
        return id
    }),
    FindItem: query([ID], Void, (_identification:string) => {
        try{
            if(ToDoList.containsKey(_identification)) {
                const itemSearched: typeof ActionItem = ToDoList.get(_identification).Some
                console.log(`Description: ${itemSearched.description} \n`)
                console.log(`Priority: ${itemSearched.priority}`)
            }
            else {
                throw new Error(`Could not find action item with the given id`)
            }
        }
        catch(error) {
            throw new Error('An error occurred during FindItem')
        }
    }),

    FindAllItems: query([], ToDoList, () => {
        return ToDoList;
    })
});