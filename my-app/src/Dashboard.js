import React from 'react';
import './Form.css';
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
const COLORS = {
  rejected: "#B91C1C",
  applied: "#D97706",
  interviewing: "#2563EB",
};
const getPercentage = (num, total) =>
  Math.round((num / total) * 100).toFixed(2);

const numApplied = 75;
const numInterviewing = 24;
const numRejected = 46;
const totalApplicants = numApplied + numInterviewing + numRejected;

const applicants = [
  {
    status: "Applied",
    value: getPercentage(numApplied, totalApplicants),
    color: COLORS.applied,
  },
  {
    status: "Interviewing",
    value: getPercentage(numInterviewing, totalApplicants),
    color: COLORS.interviewing,
  },
  {
    status: "Rejected",
    value: getPercentage(numRejected, totalApplicants),
    color: COLORS.rejected,
  },
];

const renderTooltip = context => {
  const { category, value } = context.point || context;
  return (
    <div>
      {category}: {value}%
    </div>
  );
};

const FormSuccess = () => {
  return (
    <div >
      <div className="form-content-right">
      <h1 className='form-success'>Accounts</h1>
      </div>

      <Chart style={{ minHeight: "20rem" }}>
        <ChartTitle text="Applications status - this month" />
        <ChartLegend visible={true} />
        <ChartTooltip render={renderTooltip} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={applicants}
            categoryField="status"
            field="value"
            
          >
            <ChartSeriesLabels
              color="#fff"
              background="None"
              content={e => e.category}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    </div>
  );
};

export default FormSuccess;
