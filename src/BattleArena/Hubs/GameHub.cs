using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BattleArena.Hubs
{
    [HubName("funky")]
    public class GameHub : Hub
    {
        public void PlayerJoin(string username)
        {
            Console.WriteLine("!!!!!!!!!!!!! PLAYER JOINED !!!!!!!!!!!!!!");
            Console.WriteLine($"!!!!!!!!!!!!! {username} !!!!!!!!!!!!!!");
        }
    }
}
