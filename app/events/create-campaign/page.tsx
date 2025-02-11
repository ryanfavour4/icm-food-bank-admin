"use client";
import Input from "@/components/input";
import Select from "@/components/select";
import React, { useState } from "react";

export default function CreateCampaign() {
    const [campaignName, setCampaignName] = useState({ value: "" });
    const [campaignLocation, setCampaignLocation] = useState({ value: "" });
    const [mealTarget, setMealTarget] = useState({ value: "" });
    const [date, setDate] = useState({ value: "" });

    return (
        <div className="px-2 md:p-6 ">
            <h3 className="font-semibold mb-10 text-xl">Create Campaign</h3>
            <form>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Field */}
                    <div className="flex flex-col gap-2 md:max-w-96">
                        <label
                            className="text-nowrap font-semibold"
                            htmlFor="campaignName"
                        >
                            Campaign Name
                        </label>
                        <div className="w-full">
                            <Input
                                required={true}
                                name="campaignName"
                                setState={setCampaignName}
                                state={campaignName}
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Field */}
                    <div className="flex flex-col gap-2 md:max-w-96">
                        <label
                            className="text-nowrap font-semibold"
                            htmlFor="campaignLocation"
                        >
                            Campaign Location
                        </label>
                        <div className="w-full">
                            <Select
                                required={true}
                                placeholder="Select Campaign Location"
                                name="campaignLocation"
                                setState={setCampaignLocation}
                                state={campaignLocation}
                                options={[{ label: "", value: "" }]}
                            />
                        </div>
                    </div>

                    {/* Field */}
                    <div className="flex flex-col gap-2 md:max-w-96">
                        <label
                            className="text-nowrap font-semibold"
                            htmlFor="mealTarget"
                        >
                            Meal Target Goal
                        </label>
                        <div className="w-full">
                            <Input
                                required={true}
                                name="mealTarget"
                                setState={setMealTarget}
                                state={mealTarget}
                                type="amount"
                            />
                        </div>
                    </div>

                    {/* Field */}
                    <div className="flex flex-col gap-2 md:max-w-96">
                        <label
                            className="text-nowrap font-semibold"
                            htmlFor="date"
                        >
                            Event Date
                        </label>
                        <div className="w-full">
                            <Input
                                required={true}
                                name="date"
                                setState={setDate}
                                state={date}
                                type="date"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-start gap-6 border-t pt-6">
                    <button className="btn-primary flex items-center gap-2 max-h-96 md:w-1/4">
                        Submit Manifest
                    </button>
                </div>
            </form>
        </div>
    );
}
