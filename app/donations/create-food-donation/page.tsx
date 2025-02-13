"use client";
import Input from "@/components/input";
import Select from "@/components/select";
import { useState, useEffect } from "react";

const flipStyles = `
.flip-container {
  perspective: 400px;
  display: inline-block;
}

.flip-card {
  position: relative;
  width: 40px;
  height: 65px;
  transform-origin:center;
  margin-inline:2px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipping {
  transform: rotateX(-180deg);
}

.flip-front,
.flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #020202;
  border-radius: 4px;
}

.flip-back {
  transform: rotateX(180deg);
  background: #007FDE;
  color:#fff;
}
`;

const FlipDigit = ({ digit }: { digit: string }) => {
    const [prevDigit, setPrevDigit] = useState(digit);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        if (digit !== prevDigit) {
            setFlip(true);
            const timer = setTimeout(() => {
                setPrevDigit(digit);
                setFlip(false);
            }, 600); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [digit, prevDigit]);

    return (
        <div className="flip-container">
            <div className={`flip-card ${flip ? "flipping" : ""}`}>
                <div className="flip-front">{prevDigit}</div>
                <div className="flip-back">{digit}</div>
            </div>
        </div>
    );
};

const FlipCounter = () => {
    const [count, setCount] = useState(999);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const digits = count.toString().padStart(3, "0").split("");

    return (
        <div className="">
            <style>{flipStyles}</style>
            {digits.map((digit, index) => (
                <FlipDigit key={index} digit={digit} />
            ))}
        </div>
    );
};

export default function CreateFoodDonation() {
    const [foodItem, setFoodItem] = useState({ value: "" });
    const [foodQuantity, setFoodQuantity] = useState({ value: "" });
    const [description, setDescription] = useState({ value: "" });

    return (
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 md:px-8">
                <div className="px-2 md:p-6 rounded-md bg-light h-fit border-2">
                    <h3 className="font-semibold mb-10 text-xl pb-4 border-b-2">
                        Food Donation
                    </h3>
                    <form>
                        <div className="grid gap-6 md:grid-cols-1">
                            {/* Field */}
                            <div className="flex flex-col gap-2 md:max-w-96">
                                <label
                                    className="text-nowrap font-semibold"
                                    htmlFor="foodItem"
                                >
                                    Campaign Location
                                </label>
                                <div className="w-full">
                                    <Select
                                        required={true}
                                        placeholder="Select Food Item"
                                        name="foodItem"
                                        setState={setFoodItem}
                                        state={foodItem}
                                        options={[{ label: "", value: "" }]}
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
                                        placeholder="Select Food Quantity"
                                        name="foodQuantity"
                                        setState={setFoodQuantity}
                                        state={foodQuantity}
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
                                    Description <small>(optional)</small>
                                </label>
                                <div className="w-full">
                                    <Input
                                        required={true}
                                        name="description"
                                        setState={setDescription}
                                        state={description}
                                        type="text-area"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-start gap-6 border-t pt-6">
                            <button className="btn-primary flex items-center gap-2 max-h-96 md:w-1/4">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-6 md:mt-0 px-4 py-4 rounded-md bg-light h-fit border-2">
                    <h3 className="font-semibold pb-4 mb-10 text-xl border-b-2">
                        Live Meal Counter
                    </h3>
                    <FlipCounter />
                </div>
            </div>
        </div>
    );
}
