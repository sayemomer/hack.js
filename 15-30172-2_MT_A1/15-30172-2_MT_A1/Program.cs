using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15_30172_2_MT_A1
{
    class Program
    {
        static void Main(string[] args)
        {
            Coordinate fromOrdinate = new Coordinate();
                fromOrdinate.Longitude = 23.69;
                fromOrdinate.Latitude = 72.58;
            Coordinate toOrdinate = new Coordinate();
                toOrdinate.Longitude = 73.18;
                toOrdinate.Latitude = 35.63;
            Schedule departure = new Schedule();
                departure.Hour = 8;
                departure.Minute = 15;
            Schedule Arrival = new Schedule();
                Arrival.Hour = 10;
                Arrival.Minute = 20;
            Employee employee1 = new Employee();
                employee1.ID = "AVNGR002";
                employee1.Name = "Tony Stark";
                employee1.Designation = "Senior Pilot";
            Airport fromAirport = new Airport();
                fromAirport.Id = 701;
                fromAirport.Name = "NYC Airport";
                fromAirport.Location = fromOrdinate;
            Airport toAirport = new Airport();
                toAirport.Id = 901;
                toAirport.Name = "LA Airport";
                toAirport.Location = toOrdinate;


            Flight firtstFlight = new Flight();
                firtstFlight.Id = 707;
                firtstFlight.Name = "OOP2MTA";
                firtstFlight.Capacity = 60;
                firtstFlight.Pilot = employee1;
                firtstFlight.From = fromAirport;
                firtstFlight.To = toAirport;
                firtstFlight.Depurture = departure;
                firtstFlight.Arrival = Arrival;

                firtstFlight.showInfo();
                




        }
    }
}
