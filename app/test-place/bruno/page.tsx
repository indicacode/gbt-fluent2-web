import {Textarea} from "@/components/done/textarea";
export default function Page() {
    return (<>
            <div className={"bg-gray-900 flex  w-screen h-screen"}>
                <div className={"items-center w-screen justify-center flex"}>
                <Textarea className={" "} placeholder={"Tell us what you think!"} label={"Comments"} />
                </div>
            </div>
        </>
    )
}
