import { Users } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const days = ["Day 1", "Day 2", "Day 3"];

const schedule = [
  "Registration & Welcome Tea",
  "Inaugural Session",
  "Keynote Talk 1",
  "Lunch Break",
  "Technical Session 1",
  "Panel Discussion",
];

const registrationCategories = ["Student", "Academic", "Industry", "Others"];

export function ProgrammeSection() {
  return (
    <SectionWrapper theme="white" spacing="compact">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Programme schedule */}
        <div>
          <EyebrowLabel label="Programme" />
          <h2 className="font-display text-4xl">Programme</h2>
          <p className="mt-4 text-sm leading-7 text-secondary-text">
            A three-day programme featuring keynote talks, technical sessions and networking
            opportunities.
          </p>
          <div className="mt-5 grid grid-cols-3 border border-light-border text-center text-sm">
            {days.map((day, i) => (
              <b
                key={day}
                className={`p-4 ${i === 0 ? "bg-primary-dark text-light-text" : ""}`}
              >
                {day}
              </b>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {schedule.map((item, i) => (
              <div key={item} className="grid grid-cols-[90px_1fr] gap-4 bg-soft-bg p-4 text-sm">
                <span className="text-secondary-text">{9 + i}:00</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Registration */}
        <div>
          <EyebrowLabel label="Registration" />
          <h2 className="font-display text-4xl">Registration</h2>
          <p className="mt-4 text-sm leading-7 text-secondary-text">
            Participants from academia, industry, government and civil society are invited to
            register for RECYCLE27.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {registrationCategories.map((cat) => (
              <div key={cat} className="border border-light-border p-5">
                <Users />
                <p className="mt-5 font-display text-lg">{cat}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-7 font-display text-2xl">Registration Fees</h3>
          <div className="mt-3 overflow-auto border border-light-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary-dark text-light-text">
                <tr>
                  <th className="p-3">Category</th>
                  <th>Early Bird</th>
                  <th>Regular</th>
                </tr>
              </thead>
              <tbody>
                {registrationCategories.map((cat) => (
                  <tr key={cat} className="border-t border-light-border">
                    <td className="p-3">{cat}</td>
                    <td>To be announced</td>
                    <td>To be announced</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
