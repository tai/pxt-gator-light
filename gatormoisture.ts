enum gatorMoistureType{
    moisture=1,
    adcVal=2,
}

//% color=#f44242 icon="\uf185"
namespace gatorMoisture {

    // Functions for reading moisture from the gatormoisture in moisture or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="gatorMoisture_moisture" block="Get moisture on pin %pin | in %gatorMoistureType"
    export function moisture(pin: AnalogPin, type: gatorMoistureType): number{
        let ADCVal = pins.analogReadPin(pin)
        switch(type){
            case gatorMoistureType.moisture: return getMoisture(ADCVal)
            case gatorMoistureType.adcVal: return ADCVal
            default: return -11111111
        }
    }

    /**
     * Function used for simulator, actual implementation is in gatormoisture.cpp
     */
    //% shim=gatorMoisture::getMoisture
    function getMoisture(ADCVal: number) {
        // Fake function for simulator
        return 0
    }
}
