import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from '../ServicesOne/CalculateArea/CalculateArea';
import ServicesOneHiringArea from '../ServicesOne/ServicesOneHiringArea/ServicesOneHiringArea';
import ServicesTwoAbout from './ServicesTwoAbout/ServicesTwoAbout';
import ServicesTwoArea from './ServicesTwoArea/ServicesTwoArea';

const Services = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Departments & Services" subtitle="Departments & Services" />
            {/* <ServicesTwoAbout/> */}
            <ServicesTwoArea/>
            <CalculateArea />
            <ServicesOneHiringArea />
            <Footer/>
        </>
    );
};

export default Services;