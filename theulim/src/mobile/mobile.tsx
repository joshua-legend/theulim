import React from 'react';
import MobileFirst from './sections/first/mobileFirst';
import MobileSecond from './sections/second/mobileSecond';
import DownloadButton from '../components/buttons/downloadButtons/downloadButton';
import SummaryCard from '../components/Summary/SummaryCard';
import MobileThird from './sections/third/mobileThird';
import MobileForth from './sections/forth/mobileForth';
const Mobile = () => {
  return (
    <div>
      <MobileFirst>
        <DownloadButton></DownloadButton>
      </MobileFirst>
      <MobileSecond>
        <SummaryCard></SummaryCard>
      </MobileSecond>
      <MobileThird></MobileThird>
      <MobileForth></MobileForth>
    </div>
  );
};

export default Mobile;
