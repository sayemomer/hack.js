using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15_30172_2_MT_A1
{
    class Flight
    {
        private int id;
        private string name;
        private int capacity;
        private Employee pilot;
        private Airport from;
        private Airport to;
        private Schedule departure;
        private Schedule arrival;

        public int Id
        {

            get;
            set;

        }


        public string Name
        {

            get;
            set;

        }


        public int Capacity
        {

            get;
            set;

        }


        public Employee Pilot
        {

            get;
            set;

        }


        public Airport From
        {

            get;
            set;

        }


        public Airport To
        {

            get;
            set;

        }


        public Schedule Depurture
        {

            get;
            set;

        }


        public Schedule Arrival
        {

            get;
            set;

        }

        public void showInfo()
        {
            Console.WriteLine("Flight ID :{0}\nFlight Name :{1}\nFlight Capacity :{2}\n",Id, Name, Capacity);
            Console.WriteLine("Pilot Name :{0}\nPilot ID :{1}\nPilot Designation :{2}\n", Pilot.Name, Pilot.ID, Pilot.Designation);
            Console.WriteLine("Airport From Name :{0}\nAirport From ID :{1}\nAirport From Longitude :{2}\nAirport From Latitude :{3}\n", From.Name, from.Id, From.Location.Longitude, From.Location.Latitude);
            //Airport To Name :{10}\nAirport To ID :{11}\nAirport To Longitude :{12}\nAirport To Latitude :{13}\n
           // Scheduled Departure at: {14}\nScheduled Arrival at: {15}",  pilot.Name, pilot.ID, pilot.Designation, from.Name, from.Id, from.Location.Longitude, from.Location.Latitude, to.Name, to.Id, to.Location.Longitude, to.Location.Latitude);
            //departure.Hour + departure.Minute, arrival.Hour + arrival.Minute
                                
        }


    }
}
