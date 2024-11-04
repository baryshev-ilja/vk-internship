import { tabsCountryList } from '../../model/const/filterCountryList';

import { Card } from '@/shared/ui/Card';
import { Tabs } from '@/shared/ui/Tabs';

export const FilterCountry = () => {
    return (
        <Card>
            <Tabs
                tabs={tabsCountryList}
                currentValue="DE"
                onTabClick={() => {}}
            />
        </Card>
    );
};
