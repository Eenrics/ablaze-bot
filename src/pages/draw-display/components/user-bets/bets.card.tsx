import React from 'react'

function BetsCard({ bet, draw, index }: { bet: object, draw: number[], index: number }) {
    let receipt_number = ""
    let stake = ""
    let choices = []
    let odds = ""

    console.log("- - - - - - - - - - - - bet", bet)

    if (typeof bet === "object" && "receipt_number" in bet && typeof bet.receipt_number === "string") {
        receipt_number = bet.receipt_number
    }

    if (typeof bet === "object" && "stake" in bet && typeof bet.stake === "string") {
        stake = bet.stake
    }

    if (typeof bet === "object" && "choices" in bet && bet.choices && typeof bet.choices == "object" && "numbers" in bet.choices && Array.isArray(bet.choices.numbers) && bet.choices.numbers.length > 0) {
        choices.push(...bet.choices.numbers)
    }

    if (typeof bet === "object" && "odd" in bet && typeof bet.odd === "string") {
        odds = bet.odd
    }

    return (
        <div
            className=" border-t-[2px] border-white/50 flex flex-row p-2 gap-2"
        >
            <div>
                <div className="  bg-[#f9b900] rounded-full aspect-auto h-[17px] w-[17px] text-[10px] font-semibold text-black flex justify-center items-center">
                    <p>{index + 1}</p>
                </div>
            </div>
            <div className=" flex-grow">
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-2">
                        <div className=" text-left uppercase font-semibold text-sm text-white micro">
                            receipt number
                        </div>
                        <div className="text-right font-semibold text-sm text-white micro">
                            {receipt_number}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="text-left micro-reg text-white uppercase text-sm">spots</div>
                        <div className="text-right flex flex-row justify-end gap-[1px] items-center">
                            {/* <span className="bg-white px-2 py-[2px] text-black text-xs font-semibold rounded-[4px]">
                                1
                            </span>
                            <span className="bg-[#ed880e] px-2 py-[2px] text-white text-xs font-semibold rounded-[4px]">
                                2
                            </span>
                            <span className="bg-white px-2 py-[2px] text-black text-xs font-semibold rounded-[4px]">
                                3
                            </span>
                            <span className="bg-white px-2 py-[2px] text-black text-xs font-semibold rounded-[4px]">
                                4
                            </span> */}
                            {
                                choices.map((choice, i) => {
                                    return (
                                        <span className={`${draw.includes(choice) ? 'bg-[#ed880e] text-white' : 'bg-white text-black'} px-[1.5vw] py-[0.3vh] pt-[0.6vh] text-xs font-semibold rounded-[4px]`} key={i}>
                                            {choice}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="text-left micro-reg text-white uppercase text-sm">odds</div>
                        <div className="text-right font-semibold text-xs uppercase text-white micro">
                            {odds}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="text-left micro-reg text-white uppercase text-sm">stake</div>
                        <div className="text-right font-semibold text-xs uppercase text-white micro">
                            {stake} etb
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetsCard