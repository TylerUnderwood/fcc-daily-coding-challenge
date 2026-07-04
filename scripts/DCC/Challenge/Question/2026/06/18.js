testsLogger("getStreamingBill", [
    { guess: getStreamingBill([{ format: "HD", type: "rent" }], "none"), answer: "$3.99" },
    { guess: getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "premium"), answer: "$12.73" },
    { guess: getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic"), answer: "$18.87" },
    { guess: getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium"), answer: "$29.98" },
    { guess: getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none"), answer: "$42.96" },
    { guess: getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }, { format: "HD", type: "buy" }], "basic"), answer: "$50.36" }
])
