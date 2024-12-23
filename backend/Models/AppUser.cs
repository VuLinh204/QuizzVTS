﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace SmartCards.Models;

// Add profile data for application users by adding properties to the AppUser class
public class AppUser : IdentityUser
{
    public string AvatarFileName { get; set; } = string.Empty;
    public List<Deck> Decks { get; set; } = new List<Deck>();
    public List<Folder> Folders { get; set; } = new List<Folder>();
}

