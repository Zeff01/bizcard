import React from "react";

const BusinessHours = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl md:text-4xl text-center">Business Hours</h1>
      <div>
        <div className="flex justify-center mt-8">
          <ul className="grid grid-cols-2 gap-2">
            <li>
              <p>
                Sunday: <span className="days_sun">Closed</span>
              </p>
            </li>
            <li>
              <p>
                Monday:
                <span className="days_mon">
                  <span className="days_mon_start">09:00</span> -
                  <span className="days_mon_end">19:00</span>
                </span>
              </p>
            </li>
            <li>
              <p>
                Tuesday:
                <span className="days_tue">
                  <span className="days_tue_start">09:00</span> -
                  <span className="days_tue_end">19:00</span>
                </span>
              </p>
            </li>
            <li>
              <p>
                Wednesday:
                <span className="days_wed">
                  <span className="days_wed_start">09:00</span> -
                  <span className="days_wed_end">19:00</span>
                </span>
              </p>
            </li>
            <li>
              <p>
                Thursday:
                <span className="days_thu">
                  <span className="days_thu_start">09:00</span> -
                  <span className="days_thu_end">19:00</span>
                </span>
              </p>
            </li>
            <li>
              <p>
                Friday:
                <span className="days_fri">
                  <span className="days_fri_start">09:00</span> -
                  <span className="days_fri_end">19:00</span>
                </span>
              </p>
            </li>
            <li>
              <p>
                Saturday:
                <span className="days_sat">
                  <span className="days_sat_start">09:00</span> -
                  <span className="days_sat_end">19:00</span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
